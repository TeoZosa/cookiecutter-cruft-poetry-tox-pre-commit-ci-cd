window.BENCHMARK_DATA = {
  "lastUpdate": 1628359401450,
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
          "id": "0ecd354f34aef92689d5c2958fbf5df888995527",
          "message": "Merge pull request #262 from TeoZosa/dependabot/docker/{{cookiecutter.project_slug}}/python-c5f6086\n\n⬆️ Bump python from `5f8d373` to `c5f6086` in /{{cookiecutter.project_slug}}",
          "timestamp": "2021-08-07T17:53:41Z",
          "tree_id": "f2cfc5126a5218ab21373d7f20566437c5bc0b4b"
        },
        "date": 1628359399788,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[simulated computation]",
            "value": 14641.641280430596,
            "unit": "iter/sec",
            "range": "stddev: 0.000009806285825540068",
            "extra": "mean: 68.29835404699868 usec\nrounds: 13405"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_baseline[no simulated computation]",
            "value": 4886969.76131921,
            "unit": "iter/sec",
            "range": "stddev: 9.528945252642077e-8",
            "extra": "mean: 204.62578015395786 nsec\nrounds: 188680"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[simulated computation]",
            "value": 12897.042962538606,
            "unit": "iter/sec",
            "range": "stddev: 0.000016277810637034133",
            "extra": "mean: 77.53715350911443 usec\nrounds: 9133"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_on[no simulated computation]",
            "value": 152106.5693992193,
            "unit": "iter/sec",
            "range": "stddev: 3.9629440926199615e-7",
            "extra": "mean: 6.574338004924675 usec\nrounds: 49020"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[simulated computation]",
            "value": 15844.875031327612,
            "unit": "iter/sec",
            "range": "stddev: 0.00000814342760007512",
            "extra": "mean: 63.111889366300154 usec\nrounds: 7918"
          },
          {
            "name": "tests/test_icontract_benchmark.py::TestDesignByContractPerformance::test_icontract_contract_off[no simulated computation]",
            "value": 6054010.196511423,
            "unit": "iter/sec",
            "range": "stddev: 2.077237420004193e-8",
            "extra": "mean: 165.17976804469595 nsec\nrounds: 57468"
          }
        ]
      }
    ]
  }
}