window.BENCHMARK_DATA = {
  "lastUpdate": 1629381510715,
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
          "id": "a026421b3b5b56a7ab45157c3cf1fb02078bc448",
          "message": "Merge pull request #290 from TeoZosa/dependabot/pip/{{cookiecutter.project_slug}}/dot-github/workflows/tox-3.24.2",
          "timestamp": "2021-08-19T13:43:17Z",
          "tree_id": "e57ec47835b4ca068451ff3c2be3d988fadf0904"
        },
        "date": 1629381508405,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14085.005991074315,
            "unit": "iter/sec",
            "range": "stddev: 0.000057198371224304914",
            "extra": "mean: 70.99748488809314 usec\nrounds: 11481"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4129792.5875741644,
            "unit": "iter/sec",
            "range": "stddev: 5.29904061466087e-7",
            "extra": "mean: 242.1429112467436 nsec\nrounds: 196079"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 11872.494190339336,
            "unit": "iter/sec",
            "range": "stddev: 0.0000611931962815978",
            "extra": "mean: 84.22829979682797 usec\nrounds: 7375"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 125407.53038895817,
            "unit": "iter/sec",
            "range": "stddev: 0.000010770249684888139",
            "extra": "mean: 7.974002812258932 usec\nrounds: 45870"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 14723.951606126178,
            "unit": "iter/sec",
            "range": "stddev: 0.00011425276314740893",
            "extra": "mean: 67.9165503086774 usec\nrounds: 6649"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 4221746.774029783,
            "unit": "iter/sec",
            "range": "stddev: 4.950831517998713e-7",
            "extra": "mean: 236.86877814465143 nsec\nrounds: 196079"
          }
        ]
      }
    ]
  }
}