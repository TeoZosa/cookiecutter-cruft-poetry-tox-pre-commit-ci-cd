window.BENCHMARK_DATA = {
  "lastUpdate": 1613078051861,
  "repoUrl": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "committer": {
            "email": "teofilo@sonosim.com",
            "name": "Teo Zosa",
            "username": "TeoZosa"
          },
          "distinct": true,
          "id": "5244538d80c2a13b5073dbd738975cd2f70668d3",
          "message": ":green_heart: Fix Poetry debug mode bug (temporary)\n\nsee: python-poetry/poetry#3663",
          "timestamp": "2021-02-11T13:09:45-08:00",
          "tree_id": "72eec750d9b7e2a8ca4c9ffda4961e57fd77dc2d",
          "url": "https://github.com/TeoZosa/cookiecutter-cruft-poetry-tox-pre-commit-ci-cd/commit/5244538d80c2a13b5073dbd738975cd2f70668d3"
        },
        "date": 1613078050852,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 15317.982259085637,
            "unit": "iter/sec",
            "range": "stddev: 0.000008758898465577056",
            "extra": "mean: 65.28274958713081 usec\nrounds: 12707"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 5450623.367185149,
            "unit": "iter/sec",
            "range": "stddev: 4.4941655799089545e-8",
            "extra": "mean: 183.4652539048844 nsec\nrounds: 192308"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 13564.975697607973,
            "unit": "iter/sec",
            "range": "stddev: 0.000012706686753676242",
            "extra": "mean: 73.71926218609728 usec\nrounds: 9970"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 245042.42295942456,
            "unit": "iter/sec",
            "range": "stddev: 0.000001024444947750256",
            "extra": "mean: 4.08092602057557 usec\nrounds: 63288"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 13893.287263708298,
            "unit": "iter/sec",
            "range": "stddev: 0.0000124868957059818",
            "extra": "mean: 71.97720604339445 usec\nrounds: 11682"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 2982064.7200820236,
            "unit": "iter/sec",
            "range": "stddev: 1.9360196184653357e-7",
            "extra": "mean: 335.3381277293319 nsec\nrounds: 3685"
          }
        ]
      }
    ]
  }
}