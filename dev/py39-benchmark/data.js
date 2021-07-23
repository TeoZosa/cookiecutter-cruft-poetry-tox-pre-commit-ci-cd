window.BENCHMARK_DATA = {
  "lastUpdate": 1627054026586,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "f2510b339af999ea4779a7d747c1624edc8a72d1",
          "message": "Merge pull request #252 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-7bc4014",
          "timestamp": "2021-07-23T15:22:54Z",
          "tree_id": "7e6ca530c65533a0c30e01fb397237ac6484ad25"
        },
        "date": 1627054025224,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 16442.198396715252,
            "unit": "iter/sec",
            "range": "stddev: 0.000006920592133845871",
            "extra": "mean: 60.819117728185034 usec\nrounds: 6549"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5026885.382482809,
            "unit": "iter/sec",
            "range": "stddev: 1.093910713718257e-8",
            "extra": "mean: 198.93033636386332 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 14481.662812970071,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027208124596174733",
            "extra": "mean: 69.05284378699798 usec\nrounds: 8482"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 151669.12408845252,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012074809968235582",
            "extra": "mean: 6.593299763614419 usec\nrounds: 44445"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 16437.581420858634,
            "unit": "iter/sec",
            "range": "stddev: 0.000009011406118318202",
            "extra": "mean: 60.83620055752483 usec\nrounds: 10765"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4962456.523072884,
            "unit": "iter/sec",
            "range": "stddev: 1.5554498374746495e-8",
            "extra": "mean: 201.51310048769224 nsec\nrounds: 188680"
          }
        ]
      }
    ]
  }
}