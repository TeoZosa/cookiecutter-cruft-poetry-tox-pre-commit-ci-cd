window.BENCHMARK_DATA = {
  "lastUpdate": 1624888383997,
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
          "id": "cb5cc15ea28cfdbb185b7b7f29e914d73ae68103",
          "message": "Merge pull request #224 from TeoZosa/dependabot/pip/docs/poetry-1.1.7",
          "timestamp": "2021-06-28T13:15:18Z",
          "tree_id": "c574ca54fa2181a47e2cccdf0e2a1cda14e70ca7"
        },
        "date": 1624888381198,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14605.256396033326,
            "unit": "iter/sec",
            "range": "stddev: 0.000032880381695806476",
            "extra": "mean: 68.46850016762404 usec\nrounds: 11934"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4032272.15337054,
            "unit": "iter/sec",
            "range": "stddev: 6.934593319994811e-7",
            "extra": "mean: 247.99913348213897 nsec\nrounds: 172414"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11920.103634278179,
            "unit": "iter/sec",
            "range": "stddev: 0.00004232593659723826",
            "extra": "mean: 83.89188808093402 usec\nrounds: 6326"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 120602.43136473316,
            "unit": "iter/sec",
            "range": "stddev: 0.000012356765477200195",
            "extra": "mean: 8.291706797981043 usec\nrounds: 41323"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14690.21604137272,
            "unit": "iter/sec",
            "range": "stddev: 0.00002828769561672162",
            "extra": "mean: 68.07251827908145 usec\nrounds: 12063"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4056118.7431336516,
            "unit": "iter/sec",
            "range": "stddev: 5.202939347540568e-7",
            "extra": "mean: 246.5411057538019 nsec\nrounds: 181819"
          }
        ]
      }
    ]
  }
}