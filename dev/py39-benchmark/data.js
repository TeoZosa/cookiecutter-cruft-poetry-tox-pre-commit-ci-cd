window.BENCHMARK_DATA = {
  "lastUpdate": 1624889712873,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "5bad031a5c5e4f2a0cf2969c42d692a7580da232",
          "message": "Merge pull request #231 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/pip-21.1.3",
          "timestamp": "2021-06-28T14:09:12Z",
          "tree_id": "1b6bc4f790d7406304f2f1ca2da0c9ed4d680436"
        },
        "date": 1624889711410,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16579.128683201892,
            "unit": "iter/sec",
            "range": "stddev: 0.0000051714595413595494",
            "extra": "mean: 60.3168006659607 usec\nrounds: 12316"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4966030.199562183,
            "unit": "iter/sec",
            "range": "stddev: 5.65848574452658e-7",
            "extra": "mean: 201.36808674418145 nsec\nrounds: 200000"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14573.641095697707,
            "unit": "iter/sec",
            "range": "stddev: 0.000009818368093385108",
            "extra": "mean: 68.61703217703163 usec\nrounds: 8795"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 152514.6281379401,
            "unit": "iter/sec",
            "range": "stddev: 4.054363724403008e-7",
            "extra": "mean: 6.556748111371727 usec\nrounds: 53476"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16535.68292147644,
            "unit": "iter/sec",
            "range": "stddev: 0.00001041162416474434",
            "extra": "mean: 60.47527669396746 usec\nrounds: 13889"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 5177960.695228114,
            "unit": "iter/sec",
            "range": "stddev: 7.794561660379905e-9",
            "extra": "mean: 193.12622456199637 nsec\nrounds: 52084"
          }
        ]
      }
    ]
  }
}